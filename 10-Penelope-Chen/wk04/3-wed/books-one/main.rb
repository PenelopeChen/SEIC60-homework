require 'sinatra'
require 'sinatra/reloader'
require 'httparty' 

get '/' do 
    erb :home
end

get '/info' do
    # get the book info
    # @info = #StockQuote::.quote params[:stock_code]
    # render the result
    erb :info
end