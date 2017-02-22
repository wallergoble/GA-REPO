# Required for noecho
require 'io/console'

# Our ballot
ember_candidate = {
    name: "Yehuda Yatz",
    votes: 0
}

react_candidate = {
    name: "Pete Hunt",
    votes: 0
}

angular_candidate = {
    name: "Misko Hevery",
    votes: 0
}

# Intro
puts "Please welcome to the stage #{ember_candidate}, #{react_candidate}, and #{angular_candidate}"

puts "You are allowed to input 10 votes. For each vote, please enter Yehuda, Pete, or Misko, separated by a space"

def voting_machine
# Counter for vote number
counter = 1
10.times do
    puts "Please submit vote number #{counter}"
    vote = STDIN.noecho(&:gets).chomp.downcase
        if vote == "yehuda"
            ember_candidate[:votes] += 1
            puts ember_candidate[:votes]
        elsif vote == "pete"
            react_candidate[:votes] += 1
            puts react_candidate[:votes]
        elsif vote == "misko"
            angular_candidate[:votes] += 1
            puts angular_candidate[:votes]
        else
            puts "THERE ARE ONLY THREE LEGITIMATE FRAMEWORKS. You just wasted a vote."
        end
        counter += 1
end

if ember_candidate[:votes] > react_candidate[:votes] && ember_candidate[:votes] > angular_candidate[:votes]
    puts "#{ember_candidate[:name]} is the winner with #{ember_candidate[:votes]} votes!"
elsif react_candidate[:votes] > ember_candidate[:votes] && react_candidate[:votes] > angular_candidate[:votes]
    puts "#{react_candidate[:name]} is the winner with #{react_candidate[:votes]} votes!"
elsif angular_candidate[:votes] > react_candidate[:votes] && angular_candidate[:votes] > ember_candidate[:votes]
    puts "#{angular_candidate[:name]} is the winner with #{angular_candidate[:votes]} votes!"
end