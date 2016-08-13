require 'bundler'
Bundler.require

post '/send_sms' do
  account_sid   = ENV['TWILIO_ACCOUNT_SID']
  auth_token    = ENV['TWILIO_AUTH_TOKEN']
  twilio_number = ENV['TWILIO_NUMBER']

  # Sinatra seems not to automatically parse JSON parameters as params
  params_json = JSON.parse request.body.read

  # set up a client to talk to the Twilio REST API
  client = Twilio::REST::Client.new account_sid, auth_token

  message = client.account.messages.create({
      :from => twilio_number,
      :to => params_json['to'],
      :body => params_json['body']
  })

  { success: true, detail: { to: message.to, body: message.body }  }.to_json
end

