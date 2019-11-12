package com.astontech.virl.student.domain;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.redis.core.RedisHash;
import org.springframework.data.redis.core.index.Indexed;

@Data
@NoArgsConstructor
@AllArgsConstructor
@RedisHash("mentee")
public class Mentee {

    @Id
    private String id;

    // to be able to 'query' by field other than ID an @Indexed needs to be used on that field -- redis annotation not springframework --
    @Indexed
    private
    String name;

    private String site;
    private String bu;
    private String assignedVirlInstance;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSite() {
        return site;
    }

    public void setSite(String site) {
        this.site = site;
    }

    public String getBu() {
        return bu;
    }

    public void setBu(String bu) {
        this.bu = bu;
    }

    public String getAssignedVirlInstance() {
        return assignedVirlInstance;
    }

    public void setAssignedVirlInstance(String assignedVirlInstance) {
        this.assignedVirlInstance = assignedVirlInstance;
    }

    @Override
    public String toString() {
        return "Mentee{" +
                "id='" + id + '\'' +
                ", name='" + name + '\'' +
                ", site='" + site + '\'' +
                ", bu='" + bu + '\'' +
                ", assignedVirlInstance='" + assignedVirlInstance + '\'' +
                '}';
    }
}
