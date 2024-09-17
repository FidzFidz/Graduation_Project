Dir[File.join(Rails.root, "db", "seeds", "*.rb")].sort.each do |seed|
  puts "seeding - #{seed}. loading seeds, for real!"
  load seed
end

### PUT YOUR SEEDS BELOW THIS LINE:

# Create the following users:

admin = User.find_or_create_by!(email: "admin@zenhr.com") do |user|
  user.password = "Fidz1"
  user.role = "admin"
end

member1 = User.find_or_create_by!(email: "user_1@zenhr.com") do |user|
  user.password = "Fidz2"
  user.role = "member"
end

member2 = User.find_or_create_by!(email: "user_2@zenhr.com") do |user|
  user.password = "Fidz3"
  user.role = "member"
end

# Create the following blogs:

blog1 = Blog.create!(user: member1 , title: "blog title 1" , body: "blog body 1")
blog2 = Blog.create!(user: member2, title: "blog title 2" , body: "blog body 2")
blog3 = Blog.create!(user: member2 , title: "blog title 3" , body: "blog body 3")

#Create the following tags:

funny = Tag.find_or_create_by!(name: "Funny")
professional = Tag.find_or_create_by!(name: "Professional")

 #Setup 

 blog1.tags << funny
 blog1.tags << professional
 blog2.tags << professional