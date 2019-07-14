import numpy as np
import os
import queue
from thanhdatnv2712.google_api import googleAPI

PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
user = googleAPI()


class demo(object):

    queue.Queue1(maxsize=100)
    Queue1.put("Mời bạn đặt câu hỏi")
    Queue1.put("Mình đã rõ câu hỏi, vậy còn câu trả lời thì sao?")
    Queue1.put("Bạn có muốn đặt thêm câu hỏi nữa không?")
    
    queue.Queue2(maxsize=100)
    Queue2.put("Cách mạng tháng 10 Nga diễn ra vào ngày tháng năm nào")
    Queue2.put ("Chính xác, bạn có muốn ôn tập tiếp không?")
 
    select = 0

    def calc(s):
        cv1 = ["tôi", "muốn", "lưu", "lại", "kiến", "thức"]
        cv2 = ["tôi", "muốn", "ôn", "tập", "lại", "kiến", "thức", "trong", "lĩnh", "vực", "lịch", "sử"]
        temp = s.split(" ")
        for i in temp:
            if i == "lưu": return 1
        for i in temp:
            if i == "ôn": return 2
        for i in temp:
            if i == "không": return 0
        return -1

    def process(input, select):
        if select == 0:
            status = True
            if calc(input) == 1:
                select = 1
                bot_answer = Queue1.get()
                return status, bot_answer
            if calc(input) == 2:
                select = 2
                bot_answer = Queue2.get()
                return status, bot_answer
        
        else if select == 1:
            if calc(input)==0:
                select = 0
                status = False
                bot_answer = "cám ơn bạn."
                return status, bot_answer
            else:
                bot_answer = Queue1.get()
                return status, bot_answer
        
        else if select == 2:
            if calc(input)==0:
                select = 0
                status = False
                bot_answer = "cám ơn bạn."
                return status, bot_answer
            else:
                bot_answer = Queue2.get()
                return status, bot_answer

