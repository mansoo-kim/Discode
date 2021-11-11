# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

# Users
u1 = User.create!(username: "demo", email: "demo@gmail.com", dob: "1999-09-09", password: "password", tag: 4171)
u2 = User.create!(username: "mansoo", email: "mansoo@gmail.com", dob: "1993-06-09", password: "minnie", tag: 4171)
u3 = User.create!(username: "semmay", email: "emmay@gmail.com", dob: "1998-02-26", password: "squirrel")
u4 = User.create!(username: "wood", email: "wood@gmail.com", dob: "1997-03-04", password: "shiroo")
u5 = User.create!(username: "stelluhhh", email: "stelluhhh@gmail.com", dob: "1997-09-13", password: "dabiii")
u6 = User.create!(username: "8eanie", email: "soybean@gmail.com", dob: "1996-04-08", password: "mickey")
u7 = User.create!(username: "suzinator", email: "suzi@gmail.com", dob: "1994-07-29", password: "porotyg")
u8 = User.create!(username: "soheep", email: "soh@gmail.com", dob: "1991-01-14", password: "stayinflorida")
u9 = User.create!(username: "the beef", email: "beefy@gmail.com", dob: "1996-07-07", password: "immortal")
u10 = User.create!(username: "arebiter", email: "arebiter@gmail.com", dob: "1996-09-14", password: "bellpedro")
u11 = User.create!(username: "mothammer", email: "mothammer@gmail.com", dob: "1988-04-22", password: "kimmmm")

file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/Selas_Flower.png')
u2.pfp.attach(io: file, filename: 'Selas_Flower.png')

u1.friend_ids = [u2.id, u3.id, u4.id, u5.id, u6.id, u7.id]
u2.friend_ids = [u1.id, u3.id, u4.id, u5.id, u6.id, u7.id, u8.id, u9.id, u10.id, u11.id]
u3.friend_ids = [u1.id, u2.id]
u4.friend_ids = [u1.id, u2.id]
u5.friend_ids = [u1.id, u2.id]
u6.friend_ids = [u1.id, u2.id]
u7.friend_ids = [u1.id, u2.id]
u8.friend_ids = [u2.id]
u9.friend_ids = [u2.id]
u10.friend_ids = [u2.id]
u11.friend_ids = [u2.id]

u1.outgoing_ids = [u8.id]
u8.incoming_ids = [u1.id]

u1.incoming_ids = [u9.id, u10.id, u11.id]
u9.outgoing_ids = [u1.id]
u10.outgoing_ids = [u1.id]
u11.outgoing_ids = [u1.id]

# Servers
s1 = Server.create!(name: "True Study Buddies Come to FL", owner_id: u1.id)
ms11 = Membership.create!(user_id: u1.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms12 = Membership.create!(user_id: u2.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms13 = Membership.create!(user_id: u3.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms14 = Membership.create!(user_id: u4.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms15 = Membership.create!(user_id: u5.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms16 = Membership.create!(user_id: u6.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms17 = Membership.create!(user_id: u7.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms18 = Membership.create!(user_id: u8.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms19 = Membership.create!(user_id: u9.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms110 = Membership.create!(user_id: u10.id, joinable_id: s1.id, joinable_type: s1.class.name)
ms111 = Membership.create!(user_id: u11.id, joinable_id: s1.id, joinable_type: s1.class.name)

s2 = Server.create!(name: "One Brain One Cohort", owner_id: u3.id)
ms21 = Membership.create!(user_id: u1.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms22 = Membership.create!(user_id: u2.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms23 = Membership.create!(user_id: u3.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms24 = Membership.create!(user_id: u4.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms25 = Membership.create!(user_id: u5.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms26 = Membership.create!(user_id: u6.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms27 = Membership.create!(user_id: u7.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms28 = Membership.create!(user_id: u8.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms29 = Membership.create!(user_id: u9.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms210 = Membership.create!(user_id: u10.id, joinable_id: s2.id, joinable_type: s2.class.name)
ms211 = Membership.create!(user_id: u11.id, joinable_id: s2.id, joinable_type: s2.class.name)

s3 = Server.create!(name: "Lunch League Crew", owner_id: u5.id)
ms31 = Membership.create!(user_id: u1.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms32 = Membership.create!(user_id: u2.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms33 = Membership.create!(user_id: u3.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms34 = Membership.create!(user_id: u6.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms35 = Membership.create!(user_id: u7.id, joinable_id: s3.id, joinable_type: s3.class.name)
ms36 = Membership.create!(user_id: u9.id, joinable_id: s3.id, joinable_type: s3.class.name)

# Channels
c11 = Channel.create!(name: "general", server_id: s1.id)
c12 = Channel.create!(name: "code", server_id: s1.id)
c13 = Channel.create!(name: "memes", server_id: s1.id)

c21 = Channel.create!(name: "general", server_id: s2.id)
c22 = Channel.create!(name: "homework-help", server_id: s2.id)
c23 = Channel.create!(name: "resources", server_id: s2.id)

c31 = Channel.create!(name: "general", server_id: s3.id)

# Conversations
co1 = Conversation.create!()

mc11 = Membership.create!(user_id: u1.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc12 = Membership.create!(user_id: u2.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc13 = Membership.create!(user_id: u3.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc14 = Membership.create!(user_id: u4.id, joinable_id: co1.id, joinable_type: co1.class.name)
mc15 = Membership.create!(user_id: u5.id, joinable_id: co1.id, joinable_type: co1.class.name)
co1.update(name: "AAAA")

m1 = Message.create!(sender_id: u1.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hi")
m2 = Message.create!(sender_id: u2.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hello")
m3 = Message.create!(sender_id: u3.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "hullo")
m4 = Message.create!(sender_id: u4.id, messageable_id: co1.id, messageable_type: co1.class.name, body: "bye")

co2 = Conversation.create()
mc21 = Membership.create!(user_id: u1.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc22 = Membership.create!(user_id: u2.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc23 = Membership.create!(user_id: u3.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc24 = Membership.create!(user_id: u6.id, joinable_id: co2.id, joinable_type: co2.class.name)
mc25 = Membership.create!(user_id: u7.id, joinable_id: co2.id, joinable_type: co2.class.name)

co3 = Conversation.create()
mc31 = Membership.create!(user_id: u1.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc32 = Membership.create!(user_id: u3.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc33 = Membership.create!(user_id: u5.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc34 = Membership.create!(user_id: u6.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc35 = Membership.create!(user_id: u7.id, joinable_id: co3.id, joinable_type: co3.class.name)
mc36 = Membership.create!(user_id: u8.id, joinable_id: co3.id, joinable_type: co3.class.name)
co3.update(name: "4s")

# Eden

u12 = User.create!(username: "bambi", email: "bambi@gmail.com", dob: "1999-06-06", password: "whitemage")
u13 = User.create!(username: "trish", email: "tricia@gmail.com", dob: "1994-08-08", password: "summoner")
u14 = User.create!(username: "khara", email: "rae@gmail.com", dob: "1995-03-16", password: "paladin")
u15 = User.create!(username: "baatu", email: "baatu@gmail.com", dob: "1993-10-22", password: "samurai")
u16 = User.create!(username: "cindy", email: "cindy@gmail.com", dob: "2000-01-09", password: "astrologian")
u17 = User.create!(username: "nora", email: "nora@gmail.com", dob: "2000-01-28", password: "??????")
u18 = User.create!(username: "ame", email: "ame@gmail.com", dob: "1998-03-06", password: "astrologian")
u19 = User.create!(username: "vinnie", email: "vinnie@gmail.com", dob: "1992-02-29", password: "??????")
u20 = User.create!(username: "carly", email: "carly@gmail.com", dob: "1997-10-04", password: "??????")
u21 = User.create!(username: "ruru", email: "ruru@gmail.com", dob: "2000-08-04", password: "redmage")
u22 = User.create!(username: "danny", email: "danny@gmail.com", dob: "1997-05-16", password: "??????")
u23 = User.create!(username: "dee", email: "dee@gmail.com", dob: "1997-01-01", password: "whitemage")
u24 = User.create!(username: "shut up will", email: "will@gmail.com", dob: "1993-06-06", password: "dragoon")
u25 = User.create!(username: "baldstie", email: "baldstie@gmail.com", dob: "1999-11-13", password: "??????")
u26 = User.create!(username: "jenny", email: "jenny@gmail.com", dob: "1996-07-30", password: "??????")
u27 = User.create!(username: "lumi", email: "lumi@gmail.com", dob: "1999-05-14", password: "astrologian")

file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/khara.png')
u14.pfp.attach(io: file, filename: 'khara.png')
file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/baatu.png')
u15.pfp.attach(io: file, filename: 'baatu.png')
file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/cindy.jpeg')
u16.pfp.attach(io: file, filename: 'cindy.jpeg')
file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/nora.jpg')
u17.pfp.attach(io: file, filename: 'nora.jpg')

file = open('https://discode-seeds.s3.us-east-2.amazonaws.com/ruru.jpg')
u21.pfp.attach(io: file, filename: 'ruru.jpg')


s4 = Server.create!(name: "Eden Rights", owner_id: u12.id)
ms41 = Membership.create!(user_id: u1.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms42 = Membership.create!(user_id: u2.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms43 = Membership.create!(user_id: u12.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms44 = Membership.create!(user_id: u13.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms45 = Membership.create!(user_id: u14.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms46 = Membership.create!(user_id: u15.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms47 = Membership.create!(user_id: u16.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms48 = Membership.create!(user_id: u17.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms49 = Membership.create!(user_id: u18.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms50 = Membership.create!(user_id: u19.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms51 = Membership.create!(user_id: u20.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms52 = Membership.create!(user_id: u21.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms53 = Membership.create!(user_id: u22.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms54 = Membership.create!(user_id: u23.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms55 = Membership.create!(user_id: u24.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms56 = Membership.create!(user_id: u25.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms57 = Membership.create!(user_id: u26.id, joinable_id: s4.id, joinable_type: s4.class.name)
ms58 = Membership.create!(user_id: u27.id, joinable_id: s4.id, joinable_type: s4.class.name)

c41 = Channel.create!(name: "announcements", server_id: s4.id)
c42 = Channel.create!(name: "general", server_id: s4.id)
c43 = Channel.create!(name: "screenshots", server_id: s4.id)
c44 = Channel.create!(name: "eden-events", server_id: s4.id)
c45 = Channel.create!(name: "garden-of-words", server_id: s4.id)
