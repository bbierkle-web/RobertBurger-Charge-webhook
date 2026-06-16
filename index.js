const express = require("express");
const app = express();
app.use(express.json());
const WHOP
const WHOP
API
_
_
KEY = process.env.WHOP
API
_
_
COMPANY
_
_
ID = process.env.WHOP
KEY;
COMPANY
_
_
ID;
app.get("/"
, (req, res) => res.send("Running"));
app.post("/charge"
, async (req, res) => {
try {
console.log("Body received:"
, JSON.stringify(req.body));
const { member
_
id, payment
method
_
_
id, amount } = req.body;
const response = await fetch("https://api.whop.com/api/v5/payments"
, {
method: "POST"
,
headers: {
"Authorization":
`Bearer ${WHOP
API
_
_
KEY}`
,
"Content-Type": "application/json"
},
body: JSON.stringify({
company_
id: WHOP
COMPANY
ID,
_
_
member
id: member
id,
_
_
payment
method
_
_
id: payment
method
_
_
plan: {
currency: "usd"
,
initial
_price: Number(amount) || 1,
plan
_
type: "one
time"
_
id,
}
})
});
const text = await response.text();
console.log("Whop raw response:"
, text);
res.status(200).send(text);
} catch (err) {
console.error("Error:"
, err.message);
res.status(500).json({ error: err.message });
}
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log("Running on port " + PORT));
