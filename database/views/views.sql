-- CREATE VIEW `agents_view` AS
-- SELECT 
-- `cag`.`id` AS `id`,
-- `cag`.`user_id` AS `user_id`,
-- `cag`.`level` AS `level`,
-- `cag`.`beign_agent_time` AS `beign_agent_time`,
-- `cag`.`create_time` AS `create_time`,
-- `cag`.`modify_time` AS `modify_time`,
-- `ag`.`id` AS `parent_agent_id`, 
-- `ag`.`user_id` AS `parent_user_id`
-- FROM agent ag 
-- INNER JOIN agent_relation ar ON ar.agent_id = ag.id
-- LEFT JOIN agent cag ON cag.user_id = ar.user_id

-- CREATE VIEW `agent_view`
-- AS SELECT
--    `ag`.`id` AS `id`,
--    `ag`.`user_id` AS `user_id`,
--    `ag`.`level` AS `level`,
--    `ag`.`beign_agent_time` AS `beign_agent_time`,
--    `ag`.`create_time` AS `create_time`,
--    `ag`.`modify_time` AS `modify_time`,
--    `u`.`invite_code` AS `invite_code`,
--    `ac`.`direct_rate` AS `direct_rate`,
--    `ac`.`related_rate` AS `related_rate`
-- FROM ((`agent` `ag` left join `user` `u` on((`u`.`id` = `ag`.`user_id`))) left join `agent_config` `ac` on((`ac`.`level` = `ag`.`level`)));

-- CREATE VIEW `vip_record_enabled_view`
-- AS SELECT
--    `vr`.`id` AS `id`,
--    `vr`.`trade_id` AS `trade_id`,
--    `vr`.`vip_config_id` AS `vip_config_id`,
--    `vr`.`start_time` AS `start_time`,
--    `vr`.`user_id` AS `user_id`,
--    `vr`.`end_time` AS `end_time`,
--    `tt`.`price` AS `trade_price`,
--    `vc`.`add_rate` AS `add_rate`,
--    `vc`.`vip_name` AS `vip_name`,ifnull(`temp`.`vip_price`,0) AS `total_vip_price`
-- FROM ((((`vip_record` `vr` join `user` `u` on((`u`.`id` = `vr`.`user_id`))) join `vip_config` `vc` on(((`vc`.`id` = `vr`.`vip_config_id`) and (`u`.`vip_name` = `vc`.`vip_name`)))) left join `trade_type` `tt` on((`tt`.`id` = `vr`.`trade_id`))) left join (select ifnull(sum(`tt`.`vip_price`),0) AS `vip_price`,`tt`.`vip_level` AS `vip_level`,`ua`.`user_id` AS `user_id` from (`trade_type` `tt` join `user_account` `ua` on((`ua`.`id` = `tt`.`account`))) group by `tt`.`vip_level`,`ua`.`user_id`) `temp` on(((`temp`.`vip_level` = `vc`.`vip_name`) and (`temp`.`user_id` = `vr`.`user_id`))));

DROP VIEW IF EXISTS `agent_view`;
CREATE VIEW `agent_view`
AS SELECT
   `ag`.`id` AS `id`,
   `ag`.`user_id` AS `user_id`,
   `ag`.`level` AS `level`,
   `ag`.`beign_agent_time` AS `beign_agent_time`,
   `ag`.`create_time` AS `create_time`,
   `ag`.`modify_time` AS `modify_time`,
   `u`.`invite_code` AS `invite_code`,
   `ac`.`direct_rate` AS `direct_rate`,
   `ac`.`related_rate` AS `related_rate`
FROM ((`agent` `ag` left join `user` `u` on((`u`.`id` = `ag`.`user_id`))) left join `agent_config` `ac` on((`ac`.`level` = `ag`.`level`)));

DROP VIEW IF EXISTS `agents_view`;
CREATE VIEW `agents_view`
AS SELECT
   `u`.`id` AS `id`,
   `ag`.`id` AS `agent_id`,
   `ag`.`beign_agent_time` AS `beign_agent_time`,
   `ag`.`create_time` AS `create_time`,
   `ag`.`level` AS `level`,
   `ag`.`modify_time` AS `modify_time`,
   `u`.`id` AS `user_id`,
   `u`.`recommend_invite_id` AS `parent_user_id`,
   `agc`.`id` AS `parent_agent_id`
FROM ((`user` `u` left join `agent` `ag` on((`ag`.`user_id` = `u`.`id`))) left join `agent` `agc` on((`agc`.`user_id` = `u`.`recommend_invite_id`)));

DROP VIEW IF EXISTS `customer_pdc_view`;
CREATE VIEW `customer_pdc_view`
AS SELECT
   `c`.`id` AS `id`,
   `c`.`name` AS `name`,
   `c`.`create_time` AS `create_time`,
   `c`.`modify_time` AS `modify_time`,
   `c`.`mobile` AS `mobile`,
   `c`.`weixin` AS `weixin`,
   `c`.`deleted` AS `deleted`,
   `temp`.`product_count` AS `product_count`
FROM (`customer` `c` left join (select ifnull(count(1),0) AS `product_count`,`p`.`customer` AS `customer_id` from `product` `p` group by `p`.`customer`) `temp` on((`temp`.`customer_id` = `c`.`id`)));

DROP VIEW IF EXISTS `order_view`;
CREATE VIEW `order_view`
AS SELECT
   `aly`.`id` AS `id`,
   `aly`.`user_id` AS `user_id`,
   `aly`.`product_id` AS `product_id`,
   `aly`.`create_time` AS `create_time`,
   `aly`.`modify_time` AS `modify_time`,
   `aly`.`mobile` AS `mobile`,
   `aly`.`name` AS `name`,
   `aly`.`id_no` AS `id_no`,
   `aly`.`status` AS `status`,
   `aly`.`official_status` AS `official_status`,
   `aly`.`last_official_query` AS `last_official_query`,
   `aly`.`reject_reason` AS `reject_reason`,
   `aly`.`salary_status` AS `salary_status`,
   `aly`.`invite_code` AS `invite_code`,
   `aly`.`apply_id_code` AS `apply_id_code`,
   `aly`.`official_limit` AS `official_limit`,
   `aly`.`official_expire` AS `official_expire`,
   `aly`.`official_time` AS `official_time`,
   `aly`.`loan_money` AS `loan_money`,
   `aly`.`loan_expire` AS `loan_expire`,
   `aly`.`card_money` AS `card_money`,
   `aly`.`is_settle` AS `is_settle`,
   `u`.`invite_code` AS `user_invite_code`,
   `u`.`username` AS `username`,
   `u`.`realname` AS `realname`,
   `u`.`register_mobile` AS `register_mobile`,
   `u`.`id_no` AS `sqr_id_no`,
   `prod`.`product_type` AS `product_type`,
   `prod`.`product_name` AS `product_name`,
   `uu`.`realname` AS `syr_realname`,
   `uu`.`id_no` AS `syr_id_no`,
   `uu`.`register_mobile` AS `syr_register_mobile`,
   `pae`.`deposit_status` AS `deposit_status`,
   `pae`.`deliver_status` AS `deliver_status`,
   `pae`.`id` AS `pae_id`,
   `pae`.`invite_code` AS `pos_apply_invite_code`,
   `pae`.`pay_order_no` AS `pay_order_no`,
   `pae`.`pay_price` AS `pay_price`,
   `pae`.`create_time` AS `pay_time`,0 AS `finished_task_count`,0 AS `finished_task_price`
FROM ((((`apply` `aly` left join `user` `u` on((`u`.`id` = `aly`.`user_id`))) left join `user` `uu` on((`uu`.`invite_code` = `aly`.`invite_code`))) left join `pos_apply_ext` `pae` on((`pae`.`apply_id` = `aly`.`id`))) left join `product` `prod` on((`prod`.`id` = `aly`.`product_id`))) where (((`prod`.`product_type` = 3) and (`pae`.`apply_id` is not null)) or (`prod`.`product_type` <> 3));

DROP VIEW IF EXISTS `statistic_ladder`;
CREATE VIEW `statistic_ladder`
AS SELECT
   `temp`.`user_id` AS `recommend_invite_id`,
   `temp`.`product_id` AS `product_id`,
   `temp`.`product_type` AS `product_type`,
   `temp`.`base_salary` AS `base_salary`,
   `temp`.`a_limit` AS `a_limit`,
   `temp`.`b_limit` AS `b_limit`,
   `temp`.`c_limit` AS `c_limit`,
   `temp`.`a_begin` AS `a_begin`,
   `temp`.`b_begin` AS `b_begin`,
   `temp`.`c_start` AS `c_start`,
   `temp`.`a_level_reward` AS `a_level_reward`,
   `temp`.`b_level_reward` AS `b_level_reward`,
   `temp`.`c_level_reward` AS `c_level_reward`,
   `temp`.`tmonth` AS `tmonth`,count(distinct `temp`.`mobile`) AS `total`,sum(`temp`.`official_limit`) AS `load_money`
FROM (select distinct `aly`.`id` AS `id`,`aly`.`invite_code` AS `recommend_invite_id`,`u`.`id` AS `user_id`,`aly`.`product_id` AS `product_id`,`prod`.`product_type` AS `product_type`,`aly`.`loan_money` AS `loan_money`,`aly`.`official_limit` AS `official_limit`,`aly`.`create_time` AS `create_time`,`aly`.`mobile` AS `mobile`,`prod`.`base_salary` AS `base_salary`,`prod`.`a_limit` AS `a_limit`,`prod`.`b_limit` AS `b_limit`,`prod`.`c_limit` AS `c_limit`,`prod`.`a_begin` AS `a_begin`,`prod`.`b_begin` AS `b_begin`,`prod`.`c_start` AS `c_start`,`prod`.`a_level_reward` AS `a_level_reward`,`prod`.`b_level_reward` AS `b_level_reward`,`prod`.`c_level_reward` AS `c_level_reward`,date_format(`prod`.`create_time`,'%Y%m') AS `tmonth` from ((`apply` `aly` left join `product` `prod` on((`prod`.`id` = `aly`.`product_id`))) left join `user` `u` on((`u`.`invite_code` = `aly`.`invite_code`))) where ((`u`.`id` is not null) and (`aly`.`status` = 2) and (`aly`.`invite_code` <> ''))) `temp` group by `temp`.`user_id`,`temp`.`recommend_invite_id`,`temp`.`product_id`,`temp`.`base_salary`,`temp`.`a_limit`,`temp`.`b_limit`,`temp`.`c_limit`,`temp`.`a_begin`,`temp`.`b_begin`,`temp`.`c_start`,`temp`.`a_level_reward`,`temp`.`b_level_reward`,`temp`.`c_level_reward`,`temp`.`tmonth`;

DROP VIEW IF EXISTS `vip_record_enabled_view`;
CREATE VIEW `vip_record_enabled_view`
AS SELECT
   `vr`.`id` AS `id`,
   `vr`.`trade_id` AS `trade_id`,
   `vr`.`vip_config_id` AS `vip_config_id`,
   `vr`.`start_time` AS `start_time`,
   `vr`.`user_id` AS `user_id`,
   `vr`.`end_time` AS `end_time`,
   `tt`.`price` AS `trade_price`,
   `vc`.`add_rate` AS `add_rate`,
   `vc`.`vip_name` AS `vip_name`,ifnull(`temp`.`vip_price`,0) AS `total_vip_price`
FROM ((((`vip_record` `vr` join `user` `u` on((`u`.`id` = `vr`.`user_id`))) join `vip_config` `vc` on(((`vc`.`id` = `vr`.`vip_config_id`) and (`u`.`vip_name` = `vc`.`vip_name`)))) left join `trade_type` `tt` on((`tt`.`id` = `vr`.`trade_id`))) left join (select ifnull(sum(`tt`.`vip_price`),0) AS `vip_price`,`tt`.`vip_level` AS `vip_level`,`ua`.`user_id` AS `user_id` from (`trade_type` `tt` join `user_account` `ua` on((`ua`.`id` = `tt`.`account`))) group by `tt`.`vip_level`,`ua`.`user_id`) `temp` on(((`temp`.`vip_level` = `vc`.`vip_name`) and (`temp`.`user_id` = `vr`.`user_id`))));