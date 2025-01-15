require("dotenv").config();
const fastify = require("fastify")({
  logger: true,
});

const CURRENT_UTC_TIME = "2025-01-15 13:46:43";
const CURRENT_USER = "TejasBhovad";
const DB_NAME = "test";
const COLLECTION_NAME = "cards";

if (!process.env.MONGODB_URL) {
  console.error("MONGODB_URL is not defined in .env file");
  process.exit(1);
}

const cardSchema = {
  type: "object",
  required: ["headshot", "attackScore", "defenceScore", "name"],
  properties: {
    headshot: { type: "string" },
    attackScore: { type: "number", minimum: 0, maximum: 100 },
    defenceScore: { type: "number", minimum: 0, maximum: 100 },
    name: { type: "string", minLength: 1 },
  },
};

const start = async () => {
  try {
    await fastify.register(require("@fastify/mongodb"), {
      forceClose: true,
      url: process.env.MONGODB_URL,
      database: DB_NAME,
    });

    // GET FROM ID
    fastify.get("/card/:id", async function (req, reply) {
      try {
        const cards = this.mongo.db.collection(COLLECTION_NAME);
        let id;

        if (!req.params.id || req.params.id.length !== 24) {
          return reply.code(400).send({
            error: "Invalid card ID format",
            message: "Card ID must be a 24-character hexadecimal string",
          });
        }

        try {
          const { ObjectId } = this.mongo;
          id = new ObjectId(req.params.id);
        } catch (err) {
          return reply.code(400).send({
            error: "Invalid card ID format",
            message: "The provided ID is not a valid MongoDB ObjectId",
            details: err.message,
          });
        }

        const card = await cards.findOne({ _id: id });

        if (!card) {
          return reply.code(404).send({
            error: "Card not found",
            message: `No card found with ID: ${req.params.id}`,
          });
        }

        return card;
      } catch (err) {
        req.log.error(err);
        return reply.code(500).send({
          error: "Internal Server Error",
          message: "An error occurred while retrieving the card",
          stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
        });
      }
    });
    // ADD CaRD
    fastify.post(
      "/cards",
      {
        schema: {
          body: cardSchema,
        },
      },
      async function (req, reply) {
        try {
          const cards = this.mongo.db.collection(COLLECTION_NAME);
          const newCard = {
            ...req.body,
            createdAt: CURRENT_UTC_TIME,
            createdBy: CURRENT_USER,
          };

          const result = await cards.insertOne(newCard);
          return reply.code(201).send({
            _id: result.insertedId,
            ...newCard,
          });
        } catch (err) {
          req.log.error(err);
          return reply.code(500).send({
            error: "An error occurred while adding the card",
            message: err.message,
          });
        }
      }
    );

    // ALL CARDS
    fastify.get("/cards", async function (req, reply) {
      try {
        const cards = this.mongo.db.collection(COLLECTION_NAME);
        const allCards = await cards.find({}).toArray();
        return reply.code(200).send(allCards);
      } catch (err) {
        req.log.error(err);
        return reply.code(500).send({
          error: "Internal Server Error",
          message: err.message,
        });
      }
    });

    // RNG CARDS
    fastify.get("/cards/random/:n", async function (req, reply) {
      try {
        const cards = this.mongo.db.collection(COLLECTION_NAME);
        const n = parseInt(req.params.n, 10);

        if (isNaN(n) || n <= 0) {
          return reply.code(400).send({
            error: "Invalid number of cards requested",
            message: "Number of cards must be a positive integer",
          });
        }

        const randomCards = await cards
          .aggregate([{ $sample: { size: n } }])
          .toArray();

        if (randomCards.length === 0) {
          return reply.code(404).send({
            error: "No cards found",
            message: "No cards available in the database",
          });
        }

        return reply.code(200).send(randomCards);
      } catch (err) {
        req.log.error(err);
        return reply.code(500).send({
          error: "Internal Server Error",
          message: err.message,
        });
      }
    });

    await fastify.listen({ port: 3000, host: "0.0.0.0" });
    console.log("Server is running on port 3000");
  } catch (err) {
    console.error("Error starting server:", err);
    process.exit(1);
  }
};

start();
// # Get Random Cards(3)
// curl http://localhost:3000/cards/random/3

// # Create a new card
// curl -X POST http://localhost:3000/cards \
//   -H "Content-Type: application/json" \
//   -d '{
//     "headshot": "https://example.com/image.jpg",
//     "attackScore": 85,
//     "defenceScore": 75,
//     "name": "Player Name"
//   }'

// # Get all cards
// curl http://localhost:3000/cards | python -m json.tool

// # Get card by ID
//curl http://localhost:3000/card/6787bad5665440b6ff970da4 | python -m json.tool
