def show_menu 
    puts "Calculator".center(78) # added .center to make this look nicer
    puts "=-" * 40 # Budget horizontal dividing line :D
    puts "[a] - Addition"
    # added other operations here (multiply, divide, subtract) 
    puts "[m] - Multiplication"
    puts "[d] - Division"
    puts "[s] - Subtraction"
    puts "[q] - Quit"
    print "Enter your choice"
end

show_menu 
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
    # do the thing they asked for 
    case menu_choice
    when 'a'
        puts "You chose addition!"
        # done the actual addition
        def add(a, b)
            a + b 
        end
    # added more 'when' clauses for subtract, multiply, divide, etc.
    when 'm'
        puts "You chose multiplication!"
        def mul(a, b)
            a * b 
        end
    when 'd'
        puts "You chose division!"
        def div(a, b)
            a / b 
        end 
    else 
        puts "Invalid selection. You idiot."
    end
    
    # showing the menu again 
    show_menu 
    menu_choice = gets.chomp.downcase
end 

puts "Thanks for using this crappy calculator"