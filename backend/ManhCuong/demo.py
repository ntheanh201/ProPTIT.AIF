import numpy as np
import os
import queue

PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))


class Demo(object):

    def __init__(self):
        self.queue_1 = queue.Queue(maxsize=100)
        self.queue_1.put("Mời bạn đặt câu hỏi")
        self.queue_1.put("Mình đã rõ câu hỏi, vậy còn câu trả lời thì sao?")
        self.queue_1.put("Bạn có muốn đặt thêm câu hỏi nữa không?")
        
        self.queue_2 = queue.Queue(maxsize=100)
        self.queue_2.put("Cách mạng tháng 10 Nga diễn ra vào ngày tháng năm nào")
        self.queue_2.put ("Chính xác, bạn có muốn ôn tập tiếp không?")
    
        self.select = 0

    def calc(self, s):
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

    def process(self, input):
        status = None
        if self.select == 0:
            status = True
            if self.calc(input) == 1:
                self.select = 1
                bot_answer = self.queue_1.get()
                return status, bot_answer
            if self.calc(input) == 2:
                self.select = 2
                bot_answer = self.queue_2.get()
                return status, bot_answer
        
        elif self.select == 1:
            if self.calc(input)==0:
                self.select = 0
                status = False
                bot_answer = "cám ơn bạn."
                return status, bot_answer
            else:
                bot_answer = self.queue_1.get()
                return status, bot_answer
        
        elif self.select == 2:
            if self.calc(input)==0:
                self.select = 0
                status = False
                bot_answer = "cám ơn bạn."
                return status, bot_answer
            else:
                bot_answer = self.queue_2.get()
                return status, bot_answer

if __name__ == "__main__":
    demo = Demo()
    status, answer = demo.process("Ờ tôi muốn ôn tập kiến thức mới")
    print(answer)
    while(True):
        status, answer = demo.process("")
        print(answer)
        if not status:
            break