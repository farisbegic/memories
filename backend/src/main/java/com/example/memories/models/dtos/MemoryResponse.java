package com.example.memories.models.dtos;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemoryResponse {
    private long id;
    private String title;
    private String description;
}
