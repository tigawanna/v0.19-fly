-- Active: 1702370999129@@127.0.0.1@3306

    SELECT 
    fr.id friendship_id,
CASE WHEN EXISTS (
    SELECT 1
    FROM pocketbook_friends
    WHERE 
    (user_a = '1zq7mwdrk2fys4h' AND user_b_follow_user_a = 'yes')
      OR 
      (user_b = '1zq7mwdrk2fys4h' AND user_a_follow_user_b = 'yes')
  ) THEN 'yes' ELSE 'no' END AS following_me,
CASE WHEN EXISTS (
    SELECT 1
    FROM pocketbook_friends
    WHERE (user_a = '1zq7mwdrk2fys4h' AND user_a_follow_user_b = 'yes')
      OR
       (user_b = '1zq7mwdrk2fys4h' AND user_b_follow_user_a = 'yes')
  ) THEN 'yes' ELSE 'no' END AS followed_by_me,
      fr.user_a user_a,
    fr.user_b user_b
FROM pocketbook_friends as fr 
left JOIN pocketbook_user as ua on ua.id = fr.user_a
left JOIN pocketbook_user as ub on ub.id = fr.user_b
where (
    (fr.user_a = 'd69xly642h7y8c0' and fr.user_b_follow_user_a='yes')
    OR
    (fr.user_b = 'd69xly642h7y8c0' and fr.user_a_follow_user_b='yes')
)

