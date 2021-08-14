print('###################### Start creating EHR database ######################')
db = db.getSiblingDB('ehrdb')
db.createUser(
  {
    user: 'admin',
    pwd: 'admin',
    roles: [
      {
        role: 'readWrite',
        db: 'ehrdb'
      }
    ]
  }
)
print('###################### End creating EHR database ######################')