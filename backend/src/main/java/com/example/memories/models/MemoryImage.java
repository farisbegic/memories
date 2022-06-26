package com.example.memories.models;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(name = "MemoryImage")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class MemoryImage {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column(name = "image")
    private byte[] image;

    @ManyToOne
    private Memory memory;
}
