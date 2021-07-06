import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserMigration1625550537595 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
