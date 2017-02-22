class Pet
    attr_accessor :name, :type, :age
    # Instantiates the class
    def initialize name, type, age
        @name = name
        @type = type
        @age = age
    end

    # Functionality

    def to_s
        "Hi! I'm #{@name} the #{@type}. I'm #{@age} years old.' (corresponding animal noise)"
    end

    def inc_age
        @age = age + 1
        puts "#{@name} just turned #{@age}! It must be their birthday or something"
    end

    def change_name 
        puts "What would you like to change the name of this animal to?"
        new_name = gets.chomp
        @name = new_name
    end
end

dubs = Pet.new("Dubs", "catdog", 7)
tootsie = Pet.new("tootsie", "rat", 4)

# puts dubs.to_s
# puts tootsie.to_s

# tootsie.change_name

# puts tootsie.to_s



# trashed methods
    # # Getter Methods
    # def name
    #     @name
    # end

    # def type
    #     @type
    # end

    # def age
    #     @age
    # end
    
    # # Setter Methods
    # def name= name
    #     @name = name
    # end

    # def type= type
    #     @type = type
    # end

    # def age= age
    #     @age = age
    # end
