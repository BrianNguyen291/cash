"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { toast } from "@/components/ui/use-toast"
import { Toaster } from "@/components/ui/toaster"

export function MortgageContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    loanType: "",
    propertyValue: "",
    loanAmount: "",
    message: "",
    preferredContact: "line",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Client-side validation
    if (!formData.name.trim() || !formData.phone.trim() || !formData.loanType || !formData.message.trim()) {
      toast({
        title: "表單不完整",
        description: "請填寫所有必填欄位",
        variant: "destructive",
      })
      return
    }
    
    setIsSubmitting(true)

    try {
      // Send form data to server
      const response = await fetch("/api/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          formType: "mortgage", // Add form type identifier
        }),
      })

      if (response.ok) {
        toast({
          title: "表單已送出",
          description: "我們會盡快與您聯繫",
        })

        // Reset form
        setFormData({
          name: "",
          phone: "",
          loanType: "",
          propertyValue: "",
          loanAmount: "",
          message: "",
          preferredContact: "line",
        })
      } else {
        throw new Error("提交失敗")
      }
    } catch (error) {
      toast({
        title: "提交失敗",
        description: "請稍後再試或直接聯繫我們",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 p-6 rounded-lg">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="name">姓名</Label>
            <Input
              id="name"
              name="name"
              placeholder="請輸入您的姓名"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">聯絡電話</Label>
            <Input
              id="phone"
              name="phone"
              placeholder="請輸入您的聯絡電話"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="loanType">貸款類型</Label>
            <Select 
              value={formData.loanType} 
              onValueChange={(value) => handleSelectChange("loanType", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="請選擇貸款類型" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="first-mortgage">一胎房貸</SelectItem>
                <SelectItem value="second-mortgage">二胎房貸</SelectItem>
                <SelectItem value="refinance">房屋增貸</SelectItem>
                <SelectItem value="consultation">諮詢了解</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="preferredContact">偏好聯絡方式</Label>
            <Select 
              value={formData.preferredContact} 
              onValueChange={(value) => handleSelectChange("preferredContact", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="請選擇聯絡方式" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="line">LINE</SelectItem>
                <SelectItem value="phone">電話</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="propertyValue">房屋價值（萬元）</Label>
            <Input
              id="propertyValue"
              name="propertyValue"
              placeholder="請輸入房屋價值"
              value={formData.propertyValue}
              onChange={handleChange}
              type="number"
              min="1"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="loanAmount">欲貸款金額（萬元）</Label>
            <Input
              id="loanAmount"
              name="loanAmount"
              placeholder="請輸入欲貸款金額"
              value={formData.loanAmount}
              onChange={handleChange}
              type="number"
              min="1"
            />
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="message">留言</Label>
          <Textarea
            id="message"
            name="message"
            placeholder="有任何問題或需求，請在此留言（如：房屋地點、目前是否有貸款等）"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            required
            minLength={5}
          />
        </div>

        <Button type="submit" className="w-full" disabled={isSubmitting}>
          {isSubmitting ? "提交中..." : "立即提交"}
        </Button>
      </form>
      <Toaster />
    </>
  )
}

