import numpy as np
import os
import queue
from thanhdatnv2712.google_api import googleAPI

PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
user = googleAPI()


class demo(object):

    def __init__(self):
        self.input = queue.Queue(maxsize=100)
        self.output = queue.Queue(maxsize=100)

    def process(input):
        status = True
        s = ""
        if input == "bạn có thể làm những gì" :
            s = "Mình có thể lưu trữ kiến thức của bạn, giúp bạn ôn tập kiến thức, giải đáp những câu hỏi của bạn dựa trên kho tri thức của nhân loại. Bạn muốn làm gì?"
        if input == "mình muốn lưu lại kiến thức":
            s = "Bạn muốn lưu vào thư mục nào?"
        if input == "thư mục vật lí":
            s = "Bạn có thể lựa chọn 3 cách để lưu kiến thức"
        if input == "một câu hỏi ví dụ":
            s = "Mời bạn đặt câu trả lời."
        if input == "một câu trả lời ví dụ":
            s = "Cám ơn bạn đã cung cấp thêm tri thức cho mình. Bạn có muốn đưa kiến thức này lên kho tri thức không?"
        if input == "có":
            s = "Mình đã đưa lên thành công, vì câu hỏi của bạn có nhiều câu trả lời, bạn có thể upvote những câu trả lời chính xác nhất."
        if input == "trầm cảm là gì":
            s = "Rối loạn trầm cảm là loại rối loạn khí sắc thường gặp trong tâm thần học. Bệnh do hoạt động của bộ não bị rối loạn gây nên tạo thành những biến đổi thất thường trong suy nghĩ hành vi và tác phong."
        if input == "tôi muốn ôn tập lại kiến thức trong lĩnh vực lịch sử":
            s = "Cách mạng tháng 10 Nga diễn ra vào thời gian nào, ai là người đứng đầu"
        if input == "cách mạng tháng mười nổ ra vào ngày hai tư tháng mười năm một chín mười bảy, do lenin và đảng bon sê víc lãnh đạo":
            s = "Chính xác, bạn có muốn ôn tập tiếp không?"
        if input == "không":
            status = False
        return s, status
    
    def answer_0():
        user.setContent("Mình có thể lưu trữ kiến thức của bạn, giúp bạn ôn tập kiến thức, giải đáp những câu hỏi của bạn dựa trên kho tri thức của nhân loại. Bạn muốn làm gì?")
        repath = user.text2speech()
        return repath

    def answer_1():
        user.setContent("Bạn muốn lưu vào thư mục nào?")
        repath = user.text2speech()
        return repath
       
    def answer_2():
        user.setContent("Bạn có thể lựa chọn 3 cách để lưu kiến thức.")
        repath = user.text2speech()
        return repath

    def answer_2_1():
        user.setContent("Mời bạn đặt câu hỏi.")
        repath = user.text2speech()
        return repath         
    
    def answer_2_2():
        user.setContent("Mời bạn đặt câu trả lời.")
        repath = user.text2speech()
        return repath 

    def answer_2_3():
        user.strầm cảm là gìetContent("Cám ơn bạn đã cung cấp thêm tri thức cho mình. Bạn có muốn đưa kiến thức này lên kho tri thức không?")
        repath = user.text2speech()
        return repath 

    def answer_3():
        user.setContent("Mình đã đưa lên thành công, vì câu hỏi của bạn có nhiều câu trả lời, bạn có thể upvote những câu trả lời chính xác nhất.")
        repath = user.text2speech()
        return repath

    def answer_4():
        user.setContent("Bạn có cần mình giúp gì nữa không?")
        repath = user.text2speech()
        return repath 

    def answer_5():
        user.setContent("Theo câu trả lời của Andy, Rối loạn trầm cảm là loại rối loạn khí sắc thường gặp trong tâm thần học. Bệnh do hoạt động của bộ não bị rối loạn gây nên tạo thành những biến đổi thất thường trong suy nghĩ hành vi và tác phong.")
        repath = user.text2speech()
        return repath 

    def answer_wrong():
        user.setContent("Mời bạn nói lại một lần nữa.")
        repath = user.text2speech()
        return repath 
        
    def answer_1():
        Text_to_speech("Bạn muốn lưu vào thư mục nào?")

    def answer_2():
        Text_to_speech("Bạn có thể lựa chọn 3 cách để lưu kiến thức.")

    def answer_2_1():
        Text_to_speech("Mời bạn đặt câu hỏi.")
    
    def answer_2_2():
        Text_to_speech("Mời bạn đặt câu trả lời.")
    
    def answer_2_3():
        Text_to_speech("Cám ơn bạn đã cung cấp thêm tri thức cho mình. Bạn có muốn đưa kiến thức này lên kho tri thức không?")

    def answer_3():
        Text_to_speech("Mình đã đưa lên thành công, vì câu hỏi của bạn có nhiều câu trả lời, bạn có thể upvote những câu trả lời chính xác nhất.")

    def answer_4():
        Text_to_speech("Bạn có cần mình giúp gì nữa không?")

    def answer_5():
        Text_to_speech("Theo câu trả lời của Andy, Rối loạn trầm cảm là loại rối loạn khí sắc thường gặp trong tâm thần học. Bệnh do hoạt động của bộ não bị rối loạn gây nên tạo thành những biến đổi thất thường trong suy nghĩ hành vi và tác phong.")

    def answer_6():
        Text_to_speech("Cách mạng tháng 10 Nga diễn ra vào thời gian nào, ai là người đứng đầu")

    def answer_7():
        Text_to_speech("Chính xác, bạn có muốn ôn tập tiếp không?")

    def answer_wrong():
        Text_to_speech("Mời bạn nói lại một lần nữa.")

    def record(time):
        open_record(time)
        input = Speech_to_text(path)
        return input


