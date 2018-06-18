// const express = require('express');
const { db, Vegetable, Plot, Gardener } = require('./models');

const Tomato = Vegetable.create({
    name: 'Tomato',
    color: 'red',
    planted_on: Date.now()
  })

db.sync({force: true})
    .then(() => {
        Vegetable.create({
            name: 'Avocado',
            color: 'green-brown',
            planted_on: Date.now()
          })
    })
          .then(() => console.log('Database Synced!'))
            // .then(veggie => {
            //   veggie.save()
            // })
            // .catch(error => console.log(error))

    .catch(err => {
        console.log(err);
        db.close();
    })
    