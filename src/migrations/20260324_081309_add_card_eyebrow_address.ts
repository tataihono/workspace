import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_manual_card_grid_cards" ADD COLUMN "eyebrow" varchar;
  ALTER TABLE "pages_blocks_manual_card_grid_cards" ADD COLUMN "address" varchar;
  ALTER TABLE "_pages_v_blocks_manual_card_grid_cards" ADD COLUMN "eyebrow" varchar;
  ALTER TABLE "_pages_v_blocks_manual_card_grid_cards" ADD COLUMN "address" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_blocks_manual_card_grid_cards" DROP COLUMN "eyebrow";
  ALTER TABLE "pages_blocks_manual_card_grid_cards" DROP COLUMN "address";
  ALTER TABLE "_pages_v_blocks_manual_card_grid_cards" DROP COLUMN "eyebrow";
  ALTER TABLE "_pages_v_blocks_manual_card_grid_cards" DROP COLUMN "address";`)
}
