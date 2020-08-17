# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

projects = {
  title: ['Friends of L', 'Concierge-L', 'Spirits Journey'],
  description: ['Find a friend to dine with tonight.', 'Hotel-guest communication just became easier.', 'Find your new favorite drink!'],
  link: ['friends-of-l.herokuapp.com/', 'concierge-l.herokuapp.com', 'spirits-journey.herokuapp.com']
}
Project.destroy_all

(0..2).each do |i|
  Project.create(
    title: projects[:title][i],
    description: projects[:description][i],
    link: projects[:link][i]
  )
end 