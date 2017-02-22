# Temp_converter

class Temp_converter
    body_temp_f = 98.6

    def fahrenheit_to_celsius temp
        celsius = (temp - 32) * 5 / 9
        return celsius
    end
    
    def celsius_to_fahrenheit temp
        fahrenheit = temp * 9 / 5 + 32
        return fahrenheit
    end
end

temp_calc = Temp_converter.new

puts #{temp_calc.fahrenheit_to_celsius 32}

