package com.example.chatservice.controller;

import com.example.chatservice.model.dto.ChatRoomDto.ChatRoomReq;
import com.example.chatservice.model.dto.MessageDto;
import com.example.chatservice.service.ChatService;
import com.example.chatservice.service.redis.RedisCacheService;
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

    @PostMapping("/room")
    public ResponseEntity<Map<String, Object>> createChatRoom(@RequestBody ChatRoomReq request) {
        return ResponseEntity.ok().body(chatService.makeChatRoom(request));
    }

    @GetMapping("/room/{roomId}")
    public List<MessageDto> getMessages(@PathVariable Integer roomId) {
        return chatService.findMessages(roomId);
    }

    @GetMapping("/rooms/{userId}")
    public ResponseEntity<Map<String, Object>> getChatRooms(@PathVariable String userId) {
        return ResponseEntity.ok().body(chatService.findChatRooms(userId));
    }
}
