-- Active: 1702370999129@@127.0.0.1@3306

    SELECT 
    fr.id friendship_id,
    fr.created created,
    fr.updated updated,
    fr.user_a user_a,
    fr.user_b user_b,
    ua.username user_a_name,
    ub.username user_b_name,
    ua.avatar user_a_avatar,
    ub.avatar user_b_avatar,
    ua.email user_a_email,
    ub.email user_b_email
    FROM pocketbook_friends as fr
left JOIN pocketbook_user as ua on ua.id = fr.user_a
left JOIN pocketbook_user as ub on ub.id = fr.user_b
LIMIT 12;
