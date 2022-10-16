# ts-snowflake

ts-snowflake is generate time based 64bit unique id.

Implementation of Snowflake concept.

# Installation

```shell
npm i @n-oouchi/ts-snowflake
```

# Usage

```typescript
import IdConfig from "@n-oouchi/ts-snowflake/dist/Domain/IdConfig/IdConfig";
import {TsSnowFlake} from "@n-oouchi/ts-snowflake";

const idConfig = new IdConfig(1, 0) //workerId,timeOffset
const snowFlake = new TsSnowFlake(idConfig)
const id = snowFlake.generate()
```

## IdConfig

### workerId

To any number :ex. machine id, process id, region id...

Unique to the different workerId.

### offset

Time offset to be subtracted from the current time.

Set the unix timestamp.

## TsSnowFlake

### generate

Generate id from Snowflake instance.