people_in_line = [
  { name: "Jack", age: 16 },
  { name: "Sam", age: 21 },
  { name: "Jill", age: 23 },
  { name: "Paul", age: 20 },
  { name: "Mike", age: 16 },
  { name: "Stan", age: 70 },
  { name: "Chris", age: 17 },
  { name: "Julie", age: 45 },
  { name: "Suzy", age: 65 },
  { name: "Eli", age: 28 },
  { name: "Katie", age: 50 },
  { name: "Ben", age: 33 }
]

people_in_club = []

for person in people_in_line
    if people_in_club.length < 8     
        if person[:age] >= 18
            puts "#{person[:name]} has entered the club"
            if person[:age] >= 21
                person[:servable] = true
            end
            else
                person[:servable] = false
            end
            person[:served] = false
            people_in_club << person
        end
    end
end

puts "---------------------"
puts "---------------------"
puts "---------------------"

print people_in_club

for person in people_in_club 
    if person[:age] >= 21


# I was about to say at least you're not the kid that got his api keys stolen'



