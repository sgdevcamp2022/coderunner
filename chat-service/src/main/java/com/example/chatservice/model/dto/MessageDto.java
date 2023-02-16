package com.example.chatservice.model.dto;

import com.example.chatservice.model.dto.ChatPostDto.ChatPostReq;
import com.example.chatservice.model.entity.ChatPost;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class MessageDto {

    private int roomId;
    private String nickname;
    private String content;
    private LocalDateTime createTime;

    public static MessageDto toEntity(ChatPostReq post) {
        return MessageDto.builder()
                .roomId(post.getRoomId())
                .nickname(post.getNickname())
                .content(post.getContent())
                .createTime(LocalDateTime.now())
                .build();
    }

    public static MessageDto toEntity(ChatPost post) {
        return MessageDto.builder()
                .roomId(post.getChatRoom().getId())
                .nickname(post.getUser().getNickname())
                .content(post.getContent())
                .createTime(LocalDateTime.now())
                .build();
    }

}
