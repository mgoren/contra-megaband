require 'sinatra'

get '/' do
  erb :index
end

get '/tickets' do
  erb :tickets
end

get '/tickets/' do
  erb :tickets
end

get '/tshirts' do
  erb :tshirts
end

get '/tshirts/' do
  erb :tshirts
end
