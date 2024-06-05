from flask_mysqldb import MySQL, MySQLdb


mysql = MySQL()



class GeneralQuote():

    def __init__(self, type_of_tank):
        # self.type_of_tank = type_of_tank
        pass

    def general_details(self):
        # get the value of unit_length for steel and grp to be used dynamically
        # create a cursor
        cur = mysql.connection.cursor()
        result = cur.execute("SELECT * FROM grp_tank_details grp, steel_tank_details stl, vat vt")

        result = cur.fetchone()

        # convert result to a dictionary
        all_tanks_details = dict(result)

        # get the unit_length for grp
        grp_unit_length = all_tanks_details['unit_length']

        # get the unit_length for steel
        steel_unit_length = all_tanks_details['stl.unit_length']

        return grp_unit_length, steel_unit_length