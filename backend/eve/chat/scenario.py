import numpy as np
import os
import queue

PATH = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))

class Demo:

    def answer_0():
        return "Mình có thể lưu trữ kiến thức của bạn, giúp bạn ôn tập kiến thức, giải đáp những câu hỏi của bạn dựa trên kho tri thức của nhân loại. Bạn muốn làm gì?"

    def answer_1():
        return "Bạn muốn lưu vào thư mục nào?"
       
    def answer_2():
        return "Bạn có thể lựa chọn 3 cách để lưu kiến thức."

    def answer_2_1():
        return "Mời bạn đặt câu hỏi."
    
    def answer_2_2():
        return "Mời bạn đặt câu trả lời."

    def answer_2_3():
        return "Cám ơn bạn đã cung cấp thêm tri thức cho mình. Bạn có muốn đưa kiến thức này lên kho tri thức không?"

    def answer_3():
        return "Mình đã đưa lên thành công, vì câu hỏi của bạn có nhiều câu trả lời, bạn có thể upvote những câu trả lời chính xác nhất."

    def answer_4():
        return "Bạn có cần mình giúp gì nữa không?"

    def answer_5():
        return "Theo câu trả lời của Andy, Rối loạn trầm cảm là loại rối loạn khí sắc thường gặp trong tâm thần học. Bệnh do hoạt động của bộ não bị rối loạn gây nên tạo thành những biến đổi thất thường trong suy nghĩ hành vi và tác phong."

    def answer_wrong():
        return "Mời bạn nói lại một lần nữa."
        
    def answer_1():
        return "Bạn muốn lưu vào thư mục nào?"

    def answer_2():
        return "Bạn có thể lựa chọn 3 cách để lưu kiến thức."

    def answer_2_1():
        return "Mời bạn đặt câu hỏi."
    
    def answer_2_2():
        return "Mời bạn đặt câu trả lời."
    
    def answer_2_3():
        return "Cám ơn bạn đã cung cấp thêm tri thức cho mình. Bạn có muốn đưa kiến thức này lên kho tri thức không?"

    def answer_3():
        return "Mình đã đưa lên thành công, vì câu hỏi của bạn có nhiều câu trả lời, bạn có thể upvote những câu trả lời chính xác nhất."

    def answer_4():
        return "Bạn có cần mình giúp gì nữa không?"

    def answer_5():
        return "Theo câu trả lời của Andy, Rối loạn trầm cảm là loại rối loạn khí sắc thường gặp trong tâm thần học. Bệnh do hoạt động của bộ não bị rối loạn gây nên tạo thành những biến đổi thất thường trong suy nghĩ hành vi và tác phong."

    def answer_6():
        return "Cách mạng tháng 10 Nga diễn ra vào thời gian nào, ai là người đứng đầu"

    def answer_7():
        return "Chính xác, bạn có muốn ôn tập tiếp không?"

    def answer_wrong():
        return "Mời bạn nói lại một lần nữa."

    def start(self):
        queue.Queue(maxsize=200)
        while start==true:
            user.setContent("Xin chào, mình là eve. Mình có thể giúp gì cho bạn?")
            user.text2speech()
            input = record(time) # get stream audio
            answer_0() # giới thiệu tính năng
            input = record(time) # get stream audio
            answer_1() # hỏi tên thư mục muốn lưu
            input_1 = record(time) #ghi lại tên thư mục
            open_file(temp) #mở thư mục đó 
            answer_2() #giới thiệu các cách lưu
            display_options() # hiển thị bảng chọn
            if select_status==true: close_display() # đóng bảng
            queue.Queue2(maxsize=10)
            answer_2_1() #đặt câu hỏi
            input_1 = record(time) 
            save_question(input_1) #lưu câu hỏi vào db
            Queue2.put(input_1) 
            answer_2_2() #đặt câu trả lời
            input_1 = record(time) 
            save_answer(input_1) #lưu câu hỏi vào db
            Queue2.put(input_1)
            #đọc lại câu hỏi và câu trả lời
            user.setContent(Queue2.get())  
            user.text2speech()
            user.setContent(Queue2.get())
            user.text2speech()
            answer_2_3()
            input = record(time) # yes
            answer_3() # đưa lên kho thành công
            display_table() #upvote câu trả lời
            answer_4() #mình có thể giúp gì cho bạn
            input = record(time) # trầm cảm là gì
            answer_5() #trả lời
            input = record(time) #tôi muốn ôn tập
            answer_6() # lịch sử Nga
            input = record(time) # câu trả lời
            answer_7() #chính xác..
            input = record(time) # câu trả lời
            answer_4() #mình có thể giúp gì cho bạn
            input = record(time) # không


