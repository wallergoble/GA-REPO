# https://github.com/ATL-WDI-Curriculum/oop-intro


# https://github.com/ATL-WDI-Curriculum/oop-intro/tree/master/labs/Bank_Account

# class Bank_Account  
#     attr_reader :name, :balance
#     def initialize name, balance
#         @name = name
#         @balance = balance
#     end
#     def deposit amount
#         @balance += amount
#     end
#     def withdraw amount
#         @balance -= amount
#     end
#     def to_s
#         "Hi #{@name}, your balance is $#{@balance}."
#     end
# end

# my_account = Bank_Account.new('Waller', 0)

# puts my_account.to_s

# https://github.com/ATL-WDI-Curriculum/oop-intro/tree/master/labs/traffic_light

# class Traffic_Light
#     attr_reader :name, :color

#     def initialize name
#         @name = name
#         @color = red
#     end
    
#     def status
#         puts "#{@name} is now #{@color}."
#     end
#     # Set color methods
#     def go_red 
#         @color = "red"
#         status
#     end
    
#     def go_green 
#         @color = "green"
#         status
#     end

#     def go_yellow 
#         @color = "yellow"
#         status
#     end

#     def next 
#         if @color == "red"
#             go_green
#         elsif @color == "green"
#             go_yellow
#         elsif @color == yellow
#             go_red
#         end
#     end

#     def to_s
#         "#{@name} is currently #{@color}"
#     end
# end

# test = Traffic_Light.new('North and That One Road')

# puts test.to_s
# test.go_green
# puts test.to_s

# https://github.com/ATL-WDI-Curriculum/oop-intro/tree/master/labs/hacker_cola

# class Machine 
#     attr_reader :price, :quantity

#     def initialize price, quantity
#         @price = price
#         @quantity = quantity
#         @amount_deposited = 0
#         @total_sold = 0
#     end

#     # Coin insert methods
#     def insert_nickel
#         @amount_deposited += 5
#     end

#     def insert_dime
#         @amount_deposited += 10
#     end

#     def insert_quarter
#         @amount_deposited += 25
#     end


# end

