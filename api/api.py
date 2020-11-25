import time
from flask import Flask

app = Flask(__name__, static_folder='./build', static_url_path='/')

@app.route('/')
def index():
    return app.send_static_file('index.html')

@app.route('/api/about')
def get_about():
    return {'text': "אילה זיו, בת 24, צ'לנית וזמרת-יוצרת. בוגרת המגמה למוסיקה בתיכון 'בן-צבי' בקרית אונו וסטודנטית בבית הספר 'רימון'. השתתפה בעבר ובהווה במספר הרכבים ביניהם Paka Walla ו-AllToHuman. כיום חברה בהרכב Moonshine. ניגנה ומנגנת כצ'לנית בסינגלים ו-EP רבים ומוצאת סיפוק רב בליווי אמנים מוכשרים בהופעות."}

@app.route('/api/shows')
def get_upcoming_shows():
    return {'shows': ['לצערנו אין מידע על הופעות קרובות - לתיאום הופעה צרו קשר :)']}

@app.route('/api/media')
def get_media():
    return {'pictures': [
        'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/118952002_115015660338323_6934881618662276507_n.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5UIVCDAIqeMAX8DDfKz&_nc_ht=scontent.ftlv2-1.fna&oh=55cfbbb02ef62729209c1d6bef8ca56d&oe=5FE4F7C3', 
        'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/118627187_103891878117368_9132381599334247502_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=3si_n1Fo-nsAX8mtrOk&_nc_ht=scontent.ftlv2-1.fna&oh=e37b1a207447158e9de1a16dea1cde6a&oe=5FE57208', 
        'https://scontent.ftlv2-1.fna.fbcdn.net/v/t1.0-9/118626007_103891258117430_4819440456458000705_o.jpg?_nc_cat=101&ccb=2&_nc_sid=e3f864&_nc_ohc=Ey65Kkho7oUAX_5_BNU&_nc_ht=scontent.ftlv2-1.fna&oh=411dbc0eb14566cb17a64bc86c293df6&oe=5FE25F78'
    ]}

@app.route('/api/contact')
def get_contact_details():
    return {'facebook': 'https://www.facebook.com/AyalaZiv3'}

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

if __name__ == "__main__":
    app.run(host='0.0.0.0', debug=False, port=os.environ.get('PORT', 80))
