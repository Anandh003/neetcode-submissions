class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        max_profit = 0
        left_pointer = 0
        right_pointer = 1

        while(right_pointer < len(prices)):
            buy_price = prices[left_pointer]
            sell_price = prices[right_pointer]

            if buy_price > sell_price:
                left_pointer = right_pointer
                right_pointer += 1
                continue

            profit = sell_price - buy_price

            if profit > max_profit:
                max_profit = profit
        
            right_pointer += 1
        
        return max(0, max_profit)



            

        