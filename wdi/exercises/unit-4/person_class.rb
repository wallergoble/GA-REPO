class Group
    attr_accessor :people
    def initialize original_people=[]
        @people = original_people
    end

    def add_person person
        @people << person
    end

    

end


class Person
    attr_reader :age
    attr_accessor :name

    @@people = []
    def initialize initial_name, initial_age
        @name = initial_name
        @age = initial_age
        @@people.push(self)
    end

    def rename name
        @name = name
    end

    def say_name
        "My name is #{name}"
    end

    def self.get_people
        return @@people
    end
end

swaglord = Person.new("Swag Lord Flexington", 69)

puts swaglord.say_name

