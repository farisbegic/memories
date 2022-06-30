package com.example.memories.models.entities;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "Memories")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Memory {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "title")
    private String title;

    @Column(name = "description")
    private String description;

    public Memory(String title, String description) {
        this.title = title;
        this.description = description;
    }
}
