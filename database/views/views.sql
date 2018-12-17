CREATE VIEW `agents_view` AS
SELECT 
`cag`.`id` AS `id`,
`cag`.`user_id` AS `user_id`,
`cag`.`level` AS `level`,
`cag`.`beign_agent_time` AS `beign_agent_time`,
`cag`.`create_time` AS `create_time`,
`cag`.`modify_time` AS `modify_time`,
`ag`.`id` AS `parent_agent_id`, 
`ag`.`user_id` AS `parent_user_id`
FROM agent ag 
INNER JOIN agent_relation ar ON ar.agent_id = ag.id
LEFT JOIN agent cag ON cag.user_id = ar.user_id

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
FROM ((((`qudan`.`vip_record` `vr` join `qudan`.`user` `u` on((`u`.`id` = `vr`.`user_id`))) join `qudan`.`vip_config` `vc` on(((`vc`.`id` = `vr`.`vip_config_id`) and (`u`.`vip_name` = `vc`.`vip_name`)))) left join `qudan`.`trade_type` `tt` on((`tt`.`id` = `vr`.`trade_id`))) left join (select ifnull(sum(`tt`.`vip_price`),0) AS `vip_price`,`tt`.`vip_level` AS `vip_level`,`ua`.`user_id` AS `user_id` from (`qudan`.`trade_type` `tt` join `qudan`.`user_account` `ua` on((`ua`.`id` = `tt`.`account`))) group by `tt`.`vip_level`,`ua`.`user_id`) `temp` on(((`temp`.`vip_level` = `vc`.`vip_name`) and (`temp`.`user_id` = `vr`.`user_id`))));