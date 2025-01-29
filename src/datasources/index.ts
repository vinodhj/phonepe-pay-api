import { DrizzleD1Database } from 'drizzle-orm/d1';

export class PhonePeDataSource {
  private readonly db: DrizzleD1Database;
  constructor({ db }: { db: DrizzleD1Database }) {
    this.db = db;
  }
}
