0.1.47 / 2019-05-14
===================
- Added `InvalidJsonError` and `InvalidVariableError` to `WebhookPayloadTemplate`.

0.1.46 / 2019-05-14
===================
- Added `APIFY_UI_CLIENT_KEY` constant

0.1.45 / 2019-05-14
===================
- Fixed exponential backoff to include error in warning logs

0.1.44 / 2019-05-09
===================
- Renamed `JsonToken` to `JsonVariable`.

0.1.43 / 2019-05-07
===================
- Added `jsonStringifyExtended()` and `JsonToken` class to client utils.

0.1.42 / 2019-04-17
===================
- Added input field definition allowing to create a field of any type with editor "json" or "hidden".
- Changed `./publish.sh` script to work with master only, we don't support develop branch any more.