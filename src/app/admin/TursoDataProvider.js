import { eq } from "drizzle-orm";
import { db } from "../../db/index"; // Adjust path based on your setup
import { UsersTable } from "../../db/schema"; // Import relevant tables

const TursoDataProvider = {
  async getList(resource, params) {
    console.log("Fetching list for:", resource);
    
    const table = getTable(resource);
    const rows = await db.select().from(table);
    
    return { data: rows, total: rows.length };
  },

  async getOne(resource, params) {
    console.log("Fetching one:", resource, params.id);
    
    const table = getTable(resource);
    const result = await db.select().from(table).where(eq(table.id, params.id));
    
    return { data: result[0] };
  },

  async create(resource, params) {
    console.log("Creating:", resource, params.data);
    
    const table = getTable(resource);
    const [newRecord] = await db.insert(table).values(params.data).returning();
    
    return { data: newRecord };
  },

  async update(resource, params) {
    console.log("Updating:", resource, params.id);
    
    const table = getTable(resource);
    const [updatedRecord] = await db
      .update(table)
      .set(params.data)
      .where(eq(table.id, params.id))
      .returning();
    
    return { data: updatedRecord };
  },

  async delete(resource, params) {
    console.log("Deleting:", resource, params.id);
    
    const table = getTable(resource);
    await db.delete(table).where(eq(table.id, params.id));
    
    return { data: params.previousData };
  }
};

// Helper function to get the correct Drizzle table
const getTable = (resource) => {
  switch (resource) {
    case "users":
      return users;
    case "posts":
      return posts;
    default:
      throw new Error(`Unknown resource: ${resource}`);
  }
};

export default TursoDataProvider;
