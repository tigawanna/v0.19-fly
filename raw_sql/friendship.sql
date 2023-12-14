    SELECT 
    fr.id id,
    (SELECT id from pocketbook_friends 
    where 
    ((id = fr.id) AND (user_a = '1zq7mwdrk2fys4h') )
    OR
   ((id = fr.id) AND (user_b = '1zq7mwdrk2fys4h') )
    ) 
    as user_a_follow_user_b,
     IFNULL (
    (SELECT id from pocketbook_friends 
    where 
    ((id = fr.id) AND (user_a = '1zq7mwdrk2fys4h') )
    OR
   ((id = fr.id) AND (user_b = '1zq7mwdrk2fys4h') )
    )   
    ,'no') as check_wae,
    fr.user_a user_a,
    fr.user_b user_b
    FROM pocketbook_friends as fr
left JOIN pocketbook_user as ua on ua.id = fr.user_a
left JOIN pocketbook_user as ub on ub.id = fr.user_b
