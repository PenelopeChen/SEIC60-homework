require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

get '/' do 
    erb :home 
end 

# INDEX 

# NEW 

# CREATE *

# SHOW 

# EDIT 

# POST

# UPDATE *

# DELETE *

# Opening & closing new db connection
def query_db(sql_statement)
    puts sql_statement # Optional but nice for debugging
    # Open new db connection
    db = SQLite3::Database.new 'database.sqlite3'
    # Converting db results as hashes
    db.results_as_hash = true
    results = db.execute sql_statement
    # Closing db connection 
    db.close
    results
end