# Twilio

Sample to use Twilio with trial account.

## Usage

First of all, sign up at http://twilio.kddi-web.com/ .

### Send message via Sinatra

1. Start Sinatra server

  ```shell
TWILIO_ACCOUNT_SID=<TWILIO ACCOUNT SID> \
TWILIO_AUTH_TOKEN=<TWILIO AUTH TOKEN> \
TWILIO_NUMBER=<PHONE NUMBER GIVEN BY TWILIO> \
ruby app.rb
```

1. POST message via Sinatra server

 ```shell
curl -v -H "Accept: application/json" \
-H "Content-type: application/json" \
-X POST -d '{"to":"<VERIFIED PHONE NUMBER>","body": "Hello from my app"}' \
http://localhost:4567/send_sms
```

### Send message with directly calling Twilio API

```
curl -v -X POST 'https://api.twilio.com/2010-04-01/Accounts/AC8f2fc93cfe9a25ae18339cf0655d8ce1/Messages.json' \
--data-urlencode 'To=<VERIFIED PHONE NUMBER>' \
--data-urlencode 'From=<PHONE NUMBER GIVEN BY TWILIO>' \
--data-urlencode 'Body=Hello from api' \
-u <TWILIO ACCOUNT SID>:<TWILIO AUTH TOKEN>
```

## NOTE

- `jp.twilio.com` account is not available at `www.twilio.com`
- Phone number format should be the national format. For instance, Japanese `09012345678` should be `+819012345678`. (It may be restriction of trial account?)
- Using trial account, recipient phone number must be verified. We can verify at https://jp.twilio.com/console/phone-numbers/verified

## References

- [Twilio Developer Console](https://jp.twilio.com/console/sms/dashboard)
- [Twilio SDK ruby](https://jp.twilio.com/docs/libraries/ruby)
- [Twilio SMS と MMS Rubyクイックスタート](https://jp.twilio.com/docs/quickstart/ruby/sms)
- [無料トライアル アカウントはどのように使いますか ?](https://twilioforkwc.zendesk.com/entries/23590763-%E7%84%A1%E6%96%99%E3%83%88%E3%83%A9%E3%82%A4%E3%82%A2%E3%83%AB-%E3%82%A2%E3%82%AB%E3%82%A6%E3%83%B3%E3%83%88%E3%81%AF%E3%81%A9%E3%81%AE%E3%82%88%E3%81%86%E3%81%AB%E4%BD%BF%E3%81%84%E3%81%BE%E3%81%99%E3%81%8B-)

