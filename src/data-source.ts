import { DataSource } from 'typeorm';
import { User } from './users/user.entity';
import { join } from 'path';
import * as dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config({
  path: process.env.NODE_ENV === 'test-e2e' ? '.env.test-e2e' : '.env',
});

// Get environment variables with fallbacks
const url = process.env.DATABASE_URL;
const host = process.env.DATABASE_HOST || 'localhost';
const port = parseInt(process.env.DATABASE_PORT || '5432');
const username = process.env.DATABASE_USER || 'postgres';
const password = process.env.DATABASE_PASSWORD || 'postgres';
const database = process.env.DATABASE_NAME || 'user_management';
const synchronize = process.env.DATABASE_SYNC === 'true' ? true : false;

// Create data source configuration
const dataSourceConfig = url
  ? {
      type: 'postgres' as const,
      url,
      entities: [User],
      synchronize,
      migrations: [join(__dirname, '..', 'migrations', '*.{ts,js}')],
      migrationsTableName: 'migrations',
    }
  : {
      type: 'postgres' as const,
      host,
      port,
      username,
      password,
      database,
      entities: [User],
      synchronize,
      migrations: [
        join(__dirname, '..', 'migrations', '*.{ts,js}'),
        join(__dirname, '..', 'seed-migrations', '*.{ts,js}'),
      ],
      migrationsTableName: 'migrations',
    };

export const AppDataSource = new DataSource(dataSourceConfig);
