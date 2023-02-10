package com.example.chat.controller;

import com.example.chat.model.dto.ChatRoomDto.ChatRoomReq;
import com.example.chat.model.dto.MessageDto;
import com.example.chat.service.ChatService;
import com.example.chat.service.redis.RedisCacheService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/chat")
@RequiredArgsConstructor
public class ChatController {

    private final ChatService chatService;
    private final RedisCacheService redisCacheService;

    @PostMapping("/room")
    public ResponseEntity<Map<String, Object>> creatChatRoom(@RequestBody ChatRoomReq request) {
        return ResponseEntity.ok().body(chatService.makeChatRoom(request));
    }

    @GetMapping("/room/{roomId}")
    public List<MessageDto> getMessages(@PathVariable Integer roomId) {
        return chatService.findMessages(roomId);
//        return redisCacheService.getMessagesFromCache(roomId);
    }

    @GetMapping("/rooms/{userId}")
    public ResponseEntity<Map<String, Object>> getChatRooms(@PathVariable String userId) {
        return ResponseEntity.ok().body(chatService.findChatRooms(userId));
    }
}