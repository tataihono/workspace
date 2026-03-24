import * as migration_20260323_210412_add_new_block_tables from './20260323_210412_add_new_block_tables';
import * as migration_20260324_081309_add_card_eyebrow_address from './20260324_081309_add_card_eyebrow_address';

export const migrations = [
  {
    up: migration_20260323_210412_add_new_block_tables.up,
    down: migration_20260323_210412_add_new_block_tables.down,
    name: '20260323_210412_add_new_block_tables',
  },
  {
    up: migration_20260324_081309_add_card_eyebrow_address.up,
    down: migration_20260324_081309_add_card_eyebrow_address.down,
    name: '20260324_081309_add_card_eyebrow_address'
  },
];
