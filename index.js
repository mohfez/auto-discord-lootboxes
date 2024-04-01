const superX = '{"client_build_number":280439}';
const token = "";

const headers =
{
    "authorization": token,
    "x-super-properties": Buffer.from(superX).toString("base64")
};

function openLootbox()
{
    fetch("https://discord.com/api/v9/users/@me/lootboxes/open",
    {
        "headers": headers,
        "body": null,
        "method": "POST"
    }).then(res => res.json()).then(res =>
    {
        if (res.retry_after == null) console.log("Total Opened: " + Object.values(res.user_lootbox_data.opened_items).reduce((acc, val) => acc + val, 0));
        else console.log("Rate limited.");
    });
}

setInterval(() =>
{
    openLootbox();
}, 5000);
openLootbox();
