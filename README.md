# The Funniest Honest Appliance Error

[![make.fun · u-xvader-the-funniest-honest-appliance-error-adec4450](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Rank](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/ichwann12/u-xvader-the-funniest-honest-appliance-error-adec4450/rank.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)
[![Reward](https://make.fun/badge/u-xvader-the-funniest-honest-appliance-error-adec4450/ichwann12/u-xvader-the-funniest-honest-appliance-error-adec4450/reward.svg)](https://make.fun/bounty/u-xvader-the-funniest-honest-appliance-error-adec4450?utm_source=github&utm_medium=readme&utm_campaign=u-xvader-the-funniest-honest-appliance-error-adec4450)

One line, at most 200 characters: the funniest honest error message an
appliance could show. This entry is a washing machine's confession.

> ERROR 404: Clean laundry not found. The washing machine ate your socks and feels no remorse.

## How it works

`main.ts` (Node 22, stdlib only, no network, no wall clock) reads the entry
from `entry.txt` at the repository root and writes it verbatim to
`entry.txt` in the output directory given by `MAKEFUN_OUTPUT_DIR`
(or `MAKEFUN_BOT_DIR`, defaulting to `/output`).

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
