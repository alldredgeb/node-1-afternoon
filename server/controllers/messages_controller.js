messages = [];

id = 0;

module.exports = {
  create: (req,res) => {
    req.body.id = id;
    id++
    messages.push(req.body)
    res.status(200).send(messages)
  },
  read: (req,res) => {
    res.status(200).send(messages);
  },
  update: (req,res) => {
    for(var i=0;i<messages.length;i++) {
      if(messages[i].id === +req.params.id){
        messages[i].text = req.body.text;
      }
    }
    res.status(200).send(messages);
  },
  delete: (req,res) => {
    messages = messages.filter((undesiredMessage)=>{
      return +req.params.id !== undesiredMessage.id;
    });
    res.status(200).send(messages);
  }
};