def show_menu 
    puts "Calculator".center(78) # added .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line :D
    puts "[a] - Addition"
    # added other operations here (multiply, divide, subtract) 
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[s] - Subtraction"
    puts "[q] - Quit"
    print "Enter your choice: "
end

show_menu 
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # do the thing they asked for 
    case menu_choice
    when 'a'
        puts "You chose addition!"
        puts "Enter 1st number."
        # working out the actual addition...
        num1 = gets.to_i 
        puts "Enter 2nd number."
        num2 = gets.to_i
        puts "The sum of #{ num1 } & #{ num2 } = #{ num1 + num2 } "
    # added more 'when' clauses for subtract, multiply, divide, etc.
    when 'm'
        puts "You chose multiplication!"
        puts "Enter any 2 numbers."
        def mul(a, b)
            a * b 
        end
        # puts, mul(, )
    when 'd'
        puts "You chose division!"
        puts "Enter any 2 numbers."
        def div(a, b)
            a / b 
        end 
        # puts, div(, )
    when 's'
        puts "You chose subtraction!"
        puts "Enter any 2 numbers."
        def sub(a, b)
            a - b 
        end 
        # puts, sub(, )
    else 
        puts "Invalid selection. You idiot."
    end
    
    # showing the menu again 
    show_menu 
    menu_choice = gets.chomp.downcase
end 

puts "Thanks for using this crappy calculator"