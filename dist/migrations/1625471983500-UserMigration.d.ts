import { MigrationInterface, QueryRunner } from "typeorm";
export declare class UserMigration1625471983500 implements MigrationInterface {
    name: string;
    up(queryRunner: QueryRunner): Promise<void>;
    down(queryRunner: QueryRunner): Promise<void>;
}
