package com.example.memories.models.dtos;

import lombok.*;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class CreateMemoryRequest {
    private String title;
    private String description;
}
